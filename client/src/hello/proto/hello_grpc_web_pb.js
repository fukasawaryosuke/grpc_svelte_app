/**
 * @fileoverview gRPC-Web generated client stub for hello
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: proto/hello.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.hello = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hello.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hello.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hello.HelloRequest,
 *   !proto.hello.HelloReply>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/hello.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.hello.HelloRequest,
  proto.hello.HelloReply,
  /**
   * @param {!proto.hello.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello.HelloReply.deserializeBinary
);


/**
 * @param {!proto.hello.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hello.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hello.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hello.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hello.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.hello.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hello.HelloReply>}
 *     Promise that resolves to the response
 */
proto.hello.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hello.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hello.RepeatHelloRequest,
 *   !proto.hello.HelloReply>}
 */
const methodDescriptor_Greeter_SayRepeatHello = new grpc.web.MethodDescriptor(
  '/hello.Greeter/SayRepeatHello',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.hello.RepeatHelloRequest,
  proto.hello.HelloReply,
  /**
   * @param {!proto.hello.RepeatHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello.HelloReply.deserializeBinary
);


/**
 * @param {!proto.hello.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.hello.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.hello.GreeterClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/hello.Greeter/SayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayRepeatHello);
};


/**
 * @param {!proto.hello.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.hello.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.hello.GreeterPromiseClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/hello.Greeter/SayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayRepeatHello);
};


module.exports = proto.hello;

