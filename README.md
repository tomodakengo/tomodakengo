# Tomoda Portfolio

このプロジェクトは、Viteで構築されたReactアプリケーションです。

## 開発方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## ビルド方法

```bash
# 本番用ビルド
npm run build
```

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Pagesにデプロイするように設定されています。

### 初回設定

1. GitHubリポジトリを作成します
2. リポジトリをローカルマシンにクローンします
3. プロジェクトファイルをリポジトリディレクトリにコピーします
4. `vite.config.ts`ファイル内の`repoName`変数をあなたのGitHubリポジトリ名に変更します

```typescript
// リポジトリ名を自分のリポジトリ名に変更してください
const repoName = "あなたのリポジトリ名";
```

### デプロイ

以下のコマンドを実行してGitHub Pagesにデプロイします:

```bash
# ビルドとデプロイを一度に実行
npm run deploy
```

これにより、プロジェクトが自動的にビルドされ、`gh-pages`ブランチにデプロイされます。
GitHubリポジトリの設定で、GitHub PagesのソースをGH-Pagesブランチに設定してください。 