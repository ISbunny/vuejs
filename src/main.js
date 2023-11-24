import { createApp } from 'vue';

import App from './App.vue';
import createRouter from './router';
import Axios from 'axios';
// import ActiveElement from './components/ActiveElement.vue';
// import KnowledgeBase from './components/KnowledgeBase.vue';
// import KnowledgeElement from './components/KnowledgeElement.vue';
// import KnowledgeGrid from './components/KnowledgeGrid.vue';

// createApp(App).mount("#app");

// app.component('active-element', ActiveElement);
// app.component('knowledge-base', KnowledgeBase);
// app.component('knowledge-element', KnowledgeElement);
// app.component('knowledge-grid', KnowledgeGrid);

// app.mount('#app');

const app = createApp(App).use(createRouter());
app.config.globalProperties.$http = Axios;
app.mount('#app');
