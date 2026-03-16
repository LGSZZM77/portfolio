import Intro from './components/Intro/page';
import StackList from './components/Stack/StackList';

export default function Home() {
  return (
    <div id="main_body">
      <Intro />
      <StackList />
      <div className="h-dvh"></div>
    </div>
  );
}
