import React from 'react';

interface RefreshButtonProps {
  onRefresh: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh }) => {
  return (
    <div onClick={onRefresh} style={{ cursor: 'pointer' }}>
      refresh
    </div>
  );
};

export default RefreshButton;
