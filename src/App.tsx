import Background from './components/visuals/background';
import Taskbar from './components/desktop/taskbar';

export default function App() {
  return (
    <div className='min-h-screen bg-linear-to-br from-purple-400 via-purple-300 to-pink-300 overflow-hidden relative font-mono'>
      <Background />
      <Taskbar />
    </div>
  );
}
