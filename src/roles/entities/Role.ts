import { v4 as uuidv4 } from 'uuid';

class Role {
  id?: string;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }

    // this.name = name;
    // this.created_at = new Date();
  }
}

export { Role };
