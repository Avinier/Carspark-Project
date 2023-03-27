import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  supabase.auth.onAuthStateChange(() => {
    if (session) {
      console.log(session);
      router.push("/dashboard");
    }
  });

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <Auth
        providers={["github", "google"]}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </div>
  );
};

export default Home;
