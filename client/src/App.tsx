import { Switch, Route, useLocation } from "wouter";
import { useState, useCallback, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// SPAのリダイレクト対応用のカスタムフック
const useLocationWithSPA = () => {
  // GitHub Pages SPAリダイレクトのためのロジック
  useEffect(() => {
    // URLが/?/で始まる場合、SPAリダイレクトからのリクエストなので
    // 正しいURLに変換する
    const { search } = window.location;
    if (search && search.startsWith("?/")) {
      const path = search.slice(2);
      window.history.replaceState(null, "", "/" + path);
    }
  }, []);

  // 通常のwouterのフックを使用
  return useLocation();
};

function Router() {
  return (
    <Switch hook={useLocationWithSPA}>
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
