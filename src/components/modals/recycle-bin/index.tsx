interface RecycleItemProps {
  text: string;
  image: string;
}

const RecycleItem: React.FC<RecycleItemProps> = ({ text, image }) => {
  return (
    <div className='flex flex-col items-center w-20 m-2 select-none'>
      <img src={image} alt={text} className='w-12 h-12 object-contain' />
      <span className='mt-1 text-xs text-center truncate'>{text}</span>
    </div>
  );
};

const RecycleBin: React.FC = () => {
  const trashItems = [
    { text: 'New Folder (99)', image: '/folder.png' },
    { text: 'limewire.exe', image: '/limewire.png' },
  ];

  return (
    <div className='w-full h-full p-4 flex flex-wrap gap-4'>
      {trashItems.map((item, index) => (
        <RecycleItem key={index} text={item.text} image={item.image} />
      ))}
    </div>
  );
};

export default RecycleBin;
