import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://idxkgjiijmsewprgeopl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkeGtnamlpam1zZXdwcmdlb3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzMzk4NTEsImV4cCI6MTk4ODkxNTg1MX0.a2dHNltQC7bsvQTMCuJPWTuzlm33S_IxyD4Gjohtxcw"
);
