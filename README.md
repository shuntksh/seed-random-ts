# seed-random-ts

This TypeScript library implements a seedable random number generator. It is based on the [alea](https://github.com/nquinlan/better-random-numbers-for-javascript-mirror) algorithm by Johannes Baagøe.

The sequence of numbers generated by an instance of SeedRandom is deterministic and can be reproduced by providing the same seed. This is useful for data visualization and debugging purposes. However, it is not a cryptographically secure random number generator and should not be used for security purposes.

## CLI

The library also includes a CLI tool that can be used to generate random numbers from the command line. The CLI tool accepts a seed as an argument and outputs a random number between 0 and 1.

```bash
# Usage
$ bun run index.ts --help

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

# Generate 10 random numbers
$ bun run index.ts "my-seed" -c 10
my-seed
-c
0.8191534650977701
0.45636669057421386
0.2641110133845359
0.33470424031838775
0.36870488384738564
0.8961468667257577
0.4426439334638417
0.5147086619399488
0.7363509554415941
0.31478279759176075
```

## `SeedRandom` class

The `SeedRandom` class is the main class provided by this library. It can be used to generate random numbers based on a seed.

```typescript
import { SeedRandom } from 'seed-random-ts';
const rng = new SeedRandom('my-seed'); 
console.log(rng.random()); // 0.8191534650977701
console.log(rng.random()); // 0.45636669057421386
```
