import Parent from './Parent';

const GrandParent = () => {
  return (
    <div>
      GrandParent - <Parent />
    </div>
  );
};

export default GrandParent;
