import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';
import customPropStyle from './table.js';
import tableStyle from './table.js';
import fancyTableStyle from './fancy-table.js';

class MyElement extends LitElement {
  static get style() {
    return css`
      ${customPropStyle} ${tableStyle} ${fancyTableStyle}

      table {
        margin-bottom: 40px;
      }
    `;
  }

  render() {
    return html`
      <style>${this.constructor.style}</style>
      <h2>Default Table (.table)</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sender</th>
            <th scope="col">Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe &lt;JohnDoe@example.com&gt;</td>
            <td>Next Meetup</td>
          </tr>
          <tr>
            <td>Jane Doe &lt;JaneDoe@example.com&gt;</td>
            <td>This Weekend!</td>
          </tr>
        </tbody>
      </table>
      <h2>Fancy Table (.fancy-table)</h2>
      <table class="fancy-table">
        <thead>
          <tr>
            <th scope="col">Sender</th>
            <th scope="col">Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe &lt;JohnDoe@example.com&gt;</td>
            <td>Next Meetup</td>
          </tr>
          <tr>
            <td>Jane Doe &lt;JaneDoe@example.com&gt;</td>
            <td>This Weekend!</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

customElements.define('my-element', MyElement);
