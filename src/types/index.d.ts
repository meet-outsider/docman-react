type Order = 'asc' | 'desc';

interface HeadCell {
  id: keyof IUser;
  label: string;
}
