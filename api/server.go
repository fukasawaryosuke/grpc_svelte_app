package main

import (
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	// Protocol buffer
	pb "github.com/fukasawaryosuke/grpc_svelte_app/cmd/hello"
)

type HelloHandler struct {
	pb.UnimplementedGreeterServer
}

func (h HelloHandler) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{Message: "hello" + req.Name}, nil
}

// func (h HelloHandler) SayRepeatHello(req *pb.RepeatHelloRequest, ser pb.Greeter_SayRepeatHelloServer) error {
// 	panic("implement me")
// }

func main() {
	port := ":9090"

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen %v", err)
	}

	server := grpc.NewServer()
	pb.RegisterGreeterServer(server, &HelloHandler{})
	reflection.Register(server)

	log.Printf("start grpc server")
	server.Serve(lis)
}
