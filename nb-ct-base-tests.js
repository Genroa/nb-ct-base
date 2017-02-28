// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by nb-ct-base.js.
import { name as packageName } from "meteor/genroa:nb-ct-base";

// Write your tests here!
// Here is an example.
Tinytest.add('nb-ct-base - example', function (test) {
  test.equal(packageName, "nb-ct-base");
});
