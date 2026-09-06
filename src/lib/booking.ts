export const calendlyUrl = 'https://calendly.com/bestabaidullahbutt';

type BookingTool = {
  name: string;
  description: string;
  inputSchema: { type: string; properties: Record<string, never>; additionalProperties: boolean };
  annotations: { readOnlyHint: boolean; consequentialHint: boolean };
  execute: () => Promise<string>;
};
export type BookingContext = {
  registerTool: (tool: BookingTool, options: { signal: AbortSignal }) => void | Promise<void>;
};

export function registerBookingTool(context: BookingContext | undefined, openCalendar: () => void) {
  const controller = new AbortController();
  if (typeof context?.registerTool === 'function') {
    const tool: BookingTool = {
      name: 'open_abaid_ullah_booking',
      description: 'Open Abaid Ullah’s Calendly scheduling calendar to book a call or consultation. The user must select an available event and time and confirm in Calendly. Opening the calendar does not create or confirm a booking.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: false, consequentialHint: false },
      execute: async () => {
        if (controller.signal.aborted) throw new Error('Booking tool is no longer available.');
        openCalendar();
        return JSON.stringify({ status: 'calendar_opened', bookingConfirmed: false, url: calendlyUrl, nextStep: 'Choose an event and available time, enter your details, and confirm in Calendly.' });
      },
    };
    // Defer registration so React StrictMode's discarded mount cannot leave a stale tool.
    void Promise.resolve().then(async () => {
      if (!controller.signal.aborted) await context.registerTool(tool, { signal: controller.signal });
    }).catch(error => {
      if (!controller.signal.aborted) console.warn('WebMCP booking tool could not be registered.', error);
    });
  }
  return () => controller.abort();
}
