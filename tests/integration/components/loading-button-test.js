import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loading-button', 'Integration | Component | loading button', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{loading-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loading-button}}
      template block text
    {{/loading-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders with a color option', function(assert) {

  this.render(hbs`
    {{#loading-button
    style="expand-right"
    color="green"
    }}
    Submit
    {{/loading-button}}
`);

  assert.equal(this.$('button').attr('data-color'), 'green');
});

test('it renders with a given loading transition', function(assert) {
  this.render(hbs`
    {{#loading-button
    transition="expand-right"
    color="green"
    }}
    Submit
    {{/loading-button}}
`);

  assert.equal(this.$('button').attr('data-style'), 'expand-right');

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

  assert.equal(this.$('.btn-primary').length(), 1);

});

test('it renders with a given size', function(assert) {
  this.render(hbs`
    {{#loading-button
    transition="expand-right"
    color="green"
    size="xl"
    }}
    Submit
    {{/loading-button}}
`);

  assert.equal(this.$('button').attr('data-size'), 'xl');

});

test('it renders with a given loader Style', function(assert) {
  this.render(hbs`
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


  assert.equal(this.$('.loader-bars').length, 1);

});
