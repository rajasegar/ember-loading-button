import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | loading button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{loading-button}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#loading-button}}
        template block text
      {{/loading-button}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it renders with a color option', async function(assert) {

    await render(hbs`
      {{#loading-button
      style="expand-right"
      color="green"
      }}
      Submit
      {{/loading-button}}
  `);

    assert.equal(find('button').getAttribute('data-color'), 'green');
  });

  test('it renders with a given loading transition', async function(assert) {
    await render(hbs`
      {{#loading-button
      transition="expand-right"
      color="green"
      }}
      Submit
      {{/loading-button}}
  `);

    assert.equal(find('button').getAttribute('data-style'), 'expand-right');

  });

  skip('it renders with a customClass', function(assert) {
    this.render(hbs`
      {{#loading-button
      transition="expand-right"
      customClass="btn-primary"
      }}
      Submit
      {{/loading-button}}
  `);

    assert.equal(findAll('.btn-primary').length(), 1);

  });

  test('it renders with a given size', async function(assert) {
    await render(hbs`
      {{#loading-button
      transition="expand-right"
      color="green"
      size="xl"
      }}
      Submit
      {{/loading-button}}
  `);

    assert.equal(find('button').getAttribute('data-size'), 'xl');

  });

  test('it renders with a given loader Style', async function(assert) {
    await render(hbs`
      {{#loading-button
      transition="expand-right"
      color="green"
      size="xl"
      loaderStyle="bars"
      isLoading=true
      }}
      Submit
      {{/loading-button}}
  `);


    assert.equal(findAll('.loader-bars').length, 1);

  });
});
