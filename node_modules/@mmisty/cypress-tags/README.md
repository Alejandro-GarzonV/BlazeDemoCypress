# Cypress-tags

This plugin helps to parse tags to add them 
into Mocha Test object, so you can access
tags within hooks and within a test.

Example: 
```javascript
    it('test with tags @test', { tags: ['@abc'] }, function () {
      // this.test?.tags object has all tags
      expect(this.test?.tags).to.deep.eq([
        { tag: '@abc', info: [] },
        { tag: '@test', info: [] },
      ]);
    });
```

## Installation / setup

1. install with npm:
   ```shell
   npm i -D @mmisty/cypress-tags
   ```

   or with yarn:

   ```shell
   yarn add @mmisty/cypress-tags -D
   ```

2. configure project:

   Put into your support.ts (or e2e.ts) file
   ```javascript
   import '@mmisty/cypress-tags'
   ```
3. That's it! Types should be added automatically if you use typescript.


## Adding tags
There are several ways to add tags: 
 1. inline tags - just add them into test or suite title (ex `@simple`, `@tag("info")`)
   ```javascript
   it('test with tags @simple @tag("withInfo")', function () { 
      // ...
   });
   ```
 2. cypress configuration object:
   ```javascript
   it('test with tags', { tags: ['@abc'] }, function () { 
      // ...
   });
   ```
 3. cypress configuration object may also have a string type and also parsed tag type: 
   ```javascript
   it('test with tags', { tags: '@abc' }, function () {
      // ...
   });
   ```
   ```javascript
   it('test with tags', { tags: [{ tag: '@abc', info: ['my info'] }] }, function () {
      // ...
   });
   ```

## Using tags

When tags are added to a test you can use them within hooks.
This may be helpful when you want to do some action depending on tags: 

Example (will skip tests with `@skip` tag):

```javascript
// my.test.ts
it('test to skip @skip', function () {
   // ...
});

// e2e.ts / setup.ts
beforeEach(function() {
  const test = this.currentTest;
  if(test){
    if(test.tags?.map(t => t.tag).includes('@skip')){
      this.skip();
    }
  }
})

```

## Env

To see tags in test / suite title set env variable `cyTagsShowTagsInTitle` to `true`

If you want to keep titles as they are set variable to `undefined`

 - [ ] todo: when var is `true` show only own tags 