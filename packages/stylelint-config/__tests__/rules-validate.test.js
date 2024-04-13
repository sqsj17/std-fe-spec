import assert from 'assert';
// const assert = require('assert');
// const stylelint = require('stylelint');
// const path = require('path');
import path from 'path';
import stylelint from 'stylelint';

describe('test/rules-validate.test.js', () => {
  it('Validate default',  () => {
    const filePaths = [path.join(__dirname, './fixtures/index.css')];

    const result =  stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate sass', () => {
    const filePaths = [path.join(__dirname, './fixtures/sass-test.scss')];

    const result = stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate less', () => {
    const filePaths = [path.join(__dirname, './fixtures/less-test.less')];

    const result = stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate css-module', () => {
    const filePaths = [path.join(__dirname, './fixtures/css-module.scss')];

    const result = stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length === 0);
    }
  });
});
