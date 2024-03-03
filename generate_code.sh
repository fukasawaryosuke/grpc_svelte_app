#! /bin/sh

protoc proto/hello.proto \
  --js_out=import_style=commonjs:client/src/hello \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:client/src/hello \
  --go_out=api/cmd \
  --go-grpc_out=api/cmd
