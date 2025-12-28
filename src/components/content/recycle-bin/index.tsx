import { useState } from 'react';

interface RecycleItemProps {
  text: string;
  image: string;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const RecycleItem: React.FC<RecycleItemProps> = ({ text, image, isSelected, onClick }) => {
  return (
    <div onClick={onClick} className='flex flex-col items-center w-20 m-1 cursor-default select-none group'>
      <div className='relative p-1 icon-selected-wrapper'>
        {isSelected && <div className='icon-selected-overlay' />}
        <img
          src={image}
          alt={text}
          className={`w-12 h-12 object-contain [image-rendering:pixelated] ${isSelected ? 'icon-selected-image' : ''}`}
        />
      </div>
      <span
        className={`mt-1 px-1 text-[11px] text-center break-all leading-tight border border-transparent ${
          isSelected ? 'icon-selected-label' : 'text-black'
        }`}>
        {text}
      </span>
    </div>
  );
};

const RecycleBin: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const trashItems = [
    { text: 'New Folder (99)', image: '/recycle-icons/folder.png', size: '0 KB', date: '12/28/2025 4:20 PM' },
    {
      text: 'napster_setup_v2.exe',
      image: '/recycle-icons/napster.png',
      size: '424 KB',
      date: '07/11/1998 03:45 AM',
    },
    { text: 'final_finallllll.psd', image: '/recycle-icons/psd.png', size: '450.8 KB', date: '12/25/1999 2:15 PM' },
    { text: 'README.TXT', image: '/recycle-icons/notepad.png', size: '1 KB', date: '01/01/1997 12:03 PM' },
    { text: 'Internet Explorer.lnk', image: '/recycle-icons/ie.png', size: '2 KB', date: '10/10/1997 08:00 AM' },
  ];

  const selectedItem = selectedId !== null ? trashItems[selectedId] : null;

  return (
    <div className='flex flex-col h-full bg-white font-sans'>
      <div className='flex flex-1 overflow-hidden'>
        <div className='hidden md:flex w-48 bg-[#C0C0C0] border-r border-gray-400 p-4 flex-col gap-4 shadow-[inset_-1px_0_0_0_#fff]'>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold italic text-[#808080] leading-none'>Recycle Bin</h3>
            <div className='h-1 bg-linear-to-r from-sky-500 to-transparent w-full' />
          </div>
          {selectedItem ? (
            <div className='flex flex-col gap-3 animate-in fade-in duration-200'>
              <img src={selectedItem.image} className='w-16 h-16 [image-rendering:pixelated]' alt='selected' />
              <div>
                <p className='text-xs font-bold wrap-break-word'>{selectedItem.text}</p>
                <p className='text-[10px] text-gray-600 mt-2'>Size: {selectedItem.size}</p>
                <p className='text-[10px] text-gray-600'>Modified: {selectedItem.date}</p>
              </div>
            </div>
          ) : (
            <div className='text-[11px] text-gray-700 italic mt-4'>Select an item to view its details.</div>
          )}
          <div className='mt-auto p-2 border border-gray-400 bg-[#dfdfdf] text-[10px] text-center shadow-[1px_1px_0_0_#fff]'>
            Don't forget to empty your trash!
          </div>
        </div>
        <div
          className='flex-1 p-4 flex flex-wrap content-start gap-4 overflow-y-auto bg-white select-none'
          onClick={() => setSelectedId(null)}>
          {trashItems.map((item, index) => (
            <RecycleItem
              key={index}
              text={item.text}
              image={item.image}
              isSelected={selectedId === index}
              onClick={(e) => {
                e?.stopPropagation();
                setSelectedId(index);
              }}
            />
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center px-2 py-0.5 bg-[#C0C0C0] border-t-2 border-white shadow-[0_-1px_0_0_#808080] text-[11px] text-black'>
        <div className='flex gap-2 h-4 items-center'>
          <div className='px-2 border-r border-gray-400 h-full flex items-center'>{trashItems.length} object(s)</div>
          <div className='px-2 h-full flex items-center'>{selectedId !== null ? '1 object(s) selected' : ''}</div>
        </div>
        <div className='px-4 border-l border-gray-400 h-full flex items-center font-bold'>94.2 MB</div>
      </div>
    </div>
  );
};

export default RecycleBin;
