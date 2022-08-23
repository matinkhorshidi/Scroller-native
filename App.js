import { Provider } from 'react-redux';
import RootNavigator from './src/components/RootNavigator';
import { store } from './src/Redux/store/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
