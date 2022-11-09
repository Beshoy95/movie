import Select from 'react-select';

function FilterDate({ results, handleSelect }) {
  const dateOptions = results.map((item, id) => {
    return {
      label: item.release_date,
      value: item.id,
    };
  });

  return (
    <div>
      <Select
        placeholder='Filter by Date'
        options={dateOptions}
        onChange={(values) => handleSelect(values)}
        className='text-black'
      />
    </div>
  );
}

export default FilterDate;
