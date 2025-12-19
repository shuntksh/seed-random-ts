import { seedRandom, SeedRandom } from "./src/seed-random";

export { seedRandom, SeedRandom };

if (import.meta.main) {
	const usage = `
    Usage: seed-random.ts <seed> [options]
    
    Generates a sequence of pseudo-random numbers based on a provided seed.
    
    Arguments:
      seed                  The seed string to initialize the random number generator.
    
    Options:
      -h, --help            Display this help message and exit.
      -c, --count <number>  Specifies the number of random numbers to generate. Defaults to 1 if not provided.
    
    Example:
      seed-random "my-seed" -c 10   Generates 10 pseudo-random numbers using "my-seed" as the seed.
    
    Note: 
      The seed must be a non-empty string, and the count must be a positive integer.
    `;

	const args = [...(Bun?.argv || [])].slice(2) as string[];
	const flag = {
		seed: "",
		count: 1,
	};

	while (args.length) {
		const arg = args.shift();
		switch (arg) {
			case "--help":
			case "-h":
			// biome-ignore lint/suspicious/noFallthroughSwitchClause: false positive
			case "-H":
				console.log(usage);
				process.exit(0);
			case "--count":
			case "-c":
			case "-C":
				flag.count = parseInt(args.shift() ?? "", 10);
				if (!flag.count) {
					console.error("Missing count value");
					console.log(usage);
					process.exit(1);
				}
				if (flag.count < 0 || !Number.isInteger(flag.count)) {
					console.error("Count must be a positive integer");
					console.log(usage);
					process.exit(1);
				}
				continue;
			default:
				if (typeof arg === "string" && arg.startsWith("-")) {
					console.error(`Unknown argument: ${arg}`);
					console.log(usage);
					process.exit(1);
				}
				if (typeof arg === "string" && flag.seed === "") {
					flag.seed = arg;
				}
		}
	}

	const rng = new SeedRandom(flag.seed);
	for (let i = 0; i < flag.count; i++) {
		console.log(rng.next());
	}
}
