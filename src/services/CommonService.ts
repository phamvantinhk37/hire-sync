export const CommonService = {
  getAvatarCharacter(name: string) {
    const str = name || "Default Avatar";
    const matches = str.match(/\b(\w)/g);
    return matches?.join('');
  },
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
