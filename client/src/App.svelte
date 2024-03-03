<script>
	import { GreeterPromiseClient } from './hello/proto/hello_grpc_web_pb.js';
  import { HelloRequest } from './hello/proto/hello_pb.js';

	let res =""

	const client = new GreeterPromiseClient("http://localhost:8080",null,null)

	const handleClick = ()=>{
		console.log("click")
		const request = new HelloRequest()
		request.setName("world!!!!!")
		client.sayHello(request).then((res)=>{
			console.log(res.getMessage)
			res = res.getMessage()

		})
	}

</script>

<main>
	<h1>gRPC</h1>
	<p>Hello {res}!</p>
	<p></p>
	<button on:click={handleClick}>送信</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
