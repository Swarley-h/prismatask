
const supabase = window.supabaseClient;

function ensureClient() {
  if (!supabase) {
    throw new Error('Supabase client não inicializado. Verifique index.html.');
  }
}

export async function register(email, senha) {
  ensureClient();
  const { data, error } = await supabase.auth.signUp({ email, password: senha });
  if (error) return { success: false, error: error.message };
  return { success: true, data };
}

export async function login(email, senha) {
  ensureClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha });
  if (error) return { success: false, error: error.message };
  return { success: true, data };
}

export async function getCurrentUser() {
  ensureClient();
  const { data } = await supabase.auth.getUser();
  return data?.user || null;
}
