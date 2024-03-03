# grpc_svelte_app

### Protocol buffer compiler
Protocol bufferを使用して通信プロトコルを定義するためにprotocをインストール

### Go plugins for the protocol compiler
Go用のプラグインをインストール

```
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

コンパイラがプラグインを見つけられるPATHを更新

```
export PATH="$PATH:$(go env GOPATH)/bin"
```

### Svelte
client配下にSvelteプロジェクトをインストール

```
npx degit sveltejs/template client
```

http://localhost:8080で起動

```
cd client
yarn
yarn dev
```

### Code Generator Plugin
protoc-gen-grpc-webページからダウンロード
macOSの場合は以下のコマンドを実行

```
sudo mv ~/Downloads/protoc-gen-grpc-web-1.5.0-darwin-x86_64 \
    /usr/local/bin/protoc-gen-grpc-web
chmod +x /usr/local/bin/protoc-gen-grpc-web
```

### Regenerate gRPC code
新しいサービス メソッドを使用する前に、更新された .protoファイルを以下のコマンドで再コンパイル

```
sh generate_code.sh
```

### grpc server
:9090で起動

```
go run server.go
```

### grpc_cli
brewでインストール

```
brew tap grpc/grpc
brew install grpc
```

grpc_cliコマンド

```
grpc_cli ls localhost:9090 hello.Greeter
grpc_cli ls localhost:9090 hello.Greeter -l
```

### envoy
dockerでenvoyコンテナーを起動

```
cd proxy
docker build -t envoy .
docker run -it -p 8080:8080 envoy
```
