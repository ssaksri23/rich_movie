interface Palette {
  text: {
    basicColor: string;
    whiteColor: string;
    strongColor1: string;
    strongColor2: string;
    strongColor3: string;
  };
  wrapperColor: string;
  NewRankColor: string;
  OldRankColor: string;
  backgroundColor: string;
  defaultButtonColor: string;
  primaryButtonColor: string;
  hoverBackgroundColor: string;
  sectionColor: string;
}

export const COLOR: Palette = {
  text: {
    basicColor: '#000',
    whiteColor: '#fff',
    strongColor1: '#2563EB',
    strongColor2: '#65bc9f',
    strongColor3: '#973beb',
  },
  wrapperColor: '#222326',
  sectionColor: '#F3F4F6',
  backgroundColor: '#e6e6e6',
  defaultButtonColor: '#FFFFFF',
  primaryButtonColor: '#2563EB',
  hoverBackgroundColor: '#c2cce1d1',
  NewRankColor: '#F68657',
  OldRankColor: '#c1c4bd',
};
