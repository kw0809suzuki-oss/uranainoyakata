# 私のタロット — Celtic Cross
        
ケルト十字法でタロット占いするアプリ。デフォルトの78枚のタロットで10枚を引きケルト十字配置で読める。大アルカナ22枚はユーザーが一枚ずつ自作・差し替えできる。小アルカナ56枚は選んだ世界観に応じAIが絵柄を生成する方向。まず最小実装として、デフォルト78枚から重複なしの10枚をランダムに引き、正位置逆位置を表示し、ケルト十字法の配置と位置・カード意味を閲覧できるようにする。世界観入力と大アルカナ自作（カード名や説明・画像URLの差し替え）の簡易導線も設け、AI生成は実接続がなければ明示的に未実装とする。複雑な認証や公開ギャラリーは最初は不要。モバイル対応。

Made with Floot.

# Instructions

For security reasons, the `env.json` file is not pre-populated — you will need to generate or retrieve the values yourself.  

For **JWT secrets**, generate a value with:  

```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then paste the generated value into the appropriate field.  

For the **Floot Database**, download your database content as a gzipped pg_dump (.sql.gz) from the cog icon in the database view (right pane -> data -> floot data base -> cog icon on the left of the name), restore it into your own PostgreSQL database (gunzip -c database-dump.sql.gz | psql <connection string>), and then fill in the connection string value.  

**Note:** Floot OAuth will not work in self-hosted environments.  

For other external services, retrieve your API keys and fill in the corresponding values.  

Once everything is configured, you can build and start the service with:  

```
npm install -g pnpm
pnpm install
pnpm vite build
pnpm tsx server.ts
```
