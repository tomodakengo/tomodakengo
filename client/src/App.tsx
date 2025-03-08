import { Switch, Route } from "wouter";
import { useState, useCallback, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// ハッシュベースのロケーションフックを実装
const useHashLocation = () => {
  // 初期ロード時にハッシュが空なら"#/"を設定
  useEffect(() => {
    if (window.location.hash === "") {
      window.location.hash = "/";
    }
  }, []);

  const [location, setLocation] = useState(
    window.location.hash.replace("#", "") || "/"
  );

  const handleHashChange = useCallback(() => {
    const hashPath = window.location.hash.replace("#", "") || "/";
    setLocation(hashPath);
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    // 初期ロード時にもハッシュの状態を反映
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleHashChange]);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [location, navigate];
};

function Router() {
  return (
    <Switch hook={useHashLocation}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
