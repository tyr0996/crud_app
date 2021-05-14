export class MyAdat {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;

  public currentID = 0;

  sameUser = (adat: MyAdat): boolean => (this.login.username === adat.login.username);

  totallySame(adat: MyAdat): boolean {
    return this.name.same(adat.name) && this.login.same(adat.login);
  }

  modify(toData: MyAdat): void {
    const nD: Name = new Name();
    const lD: Login = new Login();

    nD.title = toData.name.title;
    nD.first = toData.name.first;
    nD.last = toData.name.last;
    lD.username = toData.login.username;
    lD.password = toData.login.password;

  }
}

class Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export class ID{
  name: string;
  value: string;

  same(id: ID): boolean{
    alert('ITTvaGyoK');
    const n1 = this.name;
    const n2 = id.name;
    const v1 = this.value;
    const v2 = id.value;
    alert(n1 + n2 + v1 + v2);
    return n1 === n2 && v1 === v2;
  }
}

export class Name{
  title: string;
  first: string;
  last: string;

  same(withName: Name): boolean {
    const t1 = this.title;
    const t2 = withName.title;
    const f1 = this.first;
    const f2 = withName.first;
    const l1 = this.last;
    const l2 = withName.last;
    return t1 === t2 && f1 === f2 && l1 === l2;
  }
}

class Location{
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

class Street {
  number: number;
  name: string;
}

class Coordinates {
  latitude: number;
  longitude: number;
}

class Timezone {
  offset: string;
  description: string;
}

export class Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;

  same(l1: Login): boolean{
    const str1 = this.username;
    const str2 = l1.username;
    return str1 === str2;
  }
}

class Dob {
  date: string;
  age: number;
}

class Registered {
  date: string;
  age: number;
}
