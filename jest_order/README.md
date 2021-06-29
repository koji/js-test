```zsh
$ yarn test
yarn run v1.22.10
warning ../package.json: No license field
$ jest
 PASS  ./before_all.test.js
  before & after timing
    ✓ this is my first test (7 ms)
    before & after timing
      ✓ this is my test (5 ms)

  console.log
    beforeAll 1

      at before_all.test.js:2:27

  console.log
    beforeEach 1

      at Object.<anonymous> (before_all.test.js:4:28)

  console.log
    test 1

      at Object.<anonymous> (before_all.test.js:6:47)

  console.log
    afterEach 1

      at Object.<anonymous> (before_all.test.js:5:27)

  console.log
    beforeAll 2

      at before_all.test.js:9:29

  console.log
    beforeEach 1

      at Object.<anonymous> (before_all.test.js:4:28)

  console.log
    beforeEach 2

      at Object.<anonymous> (before_all.test.js:11:30)

  console.log
    test 2

      at Object.<anonymous> (before_all.test.js:13:43)

  console.log
    afterEach 2

      at Object.<anonymous> (before_all.test.js:12:29)

  console.log
    afterEach 1

      at Object.<anonymous> (before_all.test.js:5:27)

  console.log
    afterAll 2

      at before_all.test.js:10:28

  console.log
    afterAll 1

      at before_all.test.js:3:26

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.009 s
Ran all test suites.
✨  Done in 2.75s.
```
