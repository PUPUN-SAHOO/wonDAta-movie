const useGenres = (selectedGenres) => {
  if (!selectedGenres || selectedGenres.length === 0) return '';

  const genreIds = selectedGenres.map(genre => genre.id);
  return genreIds.join(',');
};

export default useGenres;
