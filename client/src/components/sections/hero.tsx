import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <Card className="max-w-3xl w-full p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tomoda Kengo
            </h1>
            <p className="text-gray-600 leading-relaxed">
              第三者検証会社でテスト自動化エンジニアをしています。ReplitやCursorでソフトウェアテストを効率化するプロダクトを開発しています。
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}