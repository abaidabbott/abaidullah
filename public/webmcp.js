/** Progressive enhancement: unsupported browsers keep the normal portfolio. */
export async function registerProfileTool(context, fetchProfile = () => fetch('/profile.json')) {
  if (typeof context?.registerTool !== 'function') return false;
  try {
    await context.registerTool({
      name: 'get_abaid_ullah_profile',
      description: 'Read Abaid Ullah’s public portfolio profile, also known as abaidabbott and abaidbutt, including applied AI capabilities, project links, official social links and contact details.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: async () => {
        const response = await fetchProfile();
        if (!response.ok) throw new Error('Public profile is temporarily unavailable.');
        return JSON.stringify(await response.json());
      },
    });
    return true;
  } catch (error) {
    console.warn('WebMCP profile tool could not be registered.', error);
    return false;
  }
}

if (typeof document !== 'undefined') {
  void registerProfileTool(document.modelContext);
}
