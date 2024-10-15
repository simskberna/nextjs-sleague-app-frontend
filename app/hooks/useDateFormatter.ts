const useDateFormatter = (dateString: string | null | undefined) => {
  if (!dateString) return 'Invalid date';


  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid date';
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default useDateFormatter;
