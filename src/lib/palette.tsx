interface Palette {
  text: {
    basicColor: string;
    strongColor1: string;
    strongColor2: string;
    strongColor3: string;
  };
  wrapperColor: string;
  NewRankColor: string;
  OldRankColor: string;
  backgroundColor: string;
  sectionColor: string;
}

const palette: Palette = {
  text: {
    basicColor: '#000',
    strongColor1: '#2563EB',
    strongColor2: '#65bc9f',
    strongColor3: '#973beb',
  },
  wrapperColor: '#222326',
  backgroundColor: '#F3F4F6',
  sectionColor: '#e6e6e6',
  NewRankColor: '#F68657',
  OldRankColor: '#c1c4bd',
};
export default palette;
