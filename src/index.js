import dva from 'dva';
import createHistory from 'history/createBrowserHistory';


// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/recommand'));

app.model(require('./models/star'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
