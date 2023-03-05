import { html } from 'lit';
import '../src/undergraduate-card.js';

export default {
  title: 'UndergraduateCard',
  component: 'undergraduate-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <undergraduate-card
      style="--undergraduate-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </undergraduate-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
