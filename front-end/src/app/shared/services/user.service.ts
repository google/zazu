import { Injectable } from '@angular/core';
import * as UserViewModel from '../view-models/user.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  VIEWACCESS = 'VIEWACCESS';
  ADMIN = 'ADMIN';

  // Mocking Users Object
  private mockUsers: UserViewModel.User[] = [
    {
      id: '5bb536d1ddd23eb99ca2ab62',
      name: 'Terri Kemp',
      googleId: 'name@gmail.com',
      secondaryEmail: 'terrikemp@zidant.com',
      organizations: [{
        id: '3',
        name: 'The Lego Company',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d176879b353fd7f912',
      name: 'Preston Duncan',
      googleId: 'name@gmail.com',
      secondaryEmail: 'prestonduncan@zidant.com',
      organizations: [{
        id: '2',
        name: 'Mattel Inc.',
        categories: ['Toy Company']
      },
      {
        id: '3',
        name: 'The Lego Company',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d17f017e2a23ba0278',
      name: 'Riley Banks',
      googleId: 'name@gmail.com',
      secondaryEmail: 'rileybanks@zidant.com',
      organizations: [{
        id: '3',
        name: 'The Lego Company',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1320d03ad65fdff5b',
      name: 'Melendez Gregory',
      googleId: 'name@gmail.com',
      secondaryEmail: 'melendezgregory@zidant.com',
      organizations: [ {
        id: '1',
        name: 'Hasbro Inc.',
        categories: ['Toy Company']
      },
      {
        id: '2',
        name: 'Mattel Inc.',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1204a2833cf5e7ce4',
      name: 'Arnold Ford',
      googleId: 'name@gmail.com',
      secondaryEmail: 'arnoldford@zidant.com',
      organizations: [{
        id: '1',
        name: 'Hasbro Inc.',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1f695ec3e12ac8bd1',
      name: 'Montgomery Murray',
      googleId: 'name@gmail.com',
      secondaryEmail: 'montgomerymurray@zidant.com',
      organizations: [{
        id: '1',
        name: 'Hasbro Inc.',
        categories: ['Toy Company']
      },
      {
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1f5998071ecba007c',
      name: 'Evelyn Hunter',
      googleId: 'name@gmail.com',
      secondaryEmail: 'evelynhunter@zidant.com',
      organizations: [ {
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d15ebce73929947531',
      name: 'Gina Curry',
      googleId: 'name@gmail.com',
      secondaryEmail: 'ginacurry@zidant.com',
      organizations: [ {
        id: '2',
        name: 'Mattel Inc.',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1ba92162c319d3518',
      name: 'Liz Rhodes',
      googleId: 'name@gmail.com',
      secondaryEmail: 'lizrhodes@zidant.com',
      organizations: [{
        id: '3',
        name: 'The Lego Company',
        categories: ['Toy Company']
      },
      {
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1f979df4420fd96c6',
      name: 'Deena Mcdowell',
      googleId: 'name@gmail.com',
      secondaryEmail: 'deenamcdowell@zidant.com',
      organizations: [{
        id: '3',
        name: 'The Lego Company',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1f2aaa4a685e7ab83',
      name: 'Juarez Fulton',
      googleId: 'name@gmail.com',
      secondaryEmail: 'juarezfulton@zidant.com',
      organizations: [  {
        id: '1',
        name: 'Hasbro Inc.',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d11bbc7b909dde3caa',
      name: 'Riddle Pittman',
      googleId: 'name@gmail.com',
      secondaryEmail: 'riddlepittman@zidant.com',
      organizations: [{
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1cfeb213cdb22d81b',
      name: 'Cunningham Salas',
      googleId: 'name@gmail.com',
      secondaryEmail: 'cunninghamsalas@zidant.com',
      organizations: [{
        id: '2',
        name: 'Mattel Inc.',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d119b4503f2cefdd69',
      name: 'Nona Serrano',
      googleId: 'name@gmail.com',
      secondaryEmail: 'nonaserrano@zidant.com',
      organizations: [{
        id: '1',
        name: 'Hasbro Inc.',
        categories: ['Toy Company']
      },
      {
        id: '2',
        name: 'Mattel Inc.',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d14c8fdf63c86d336e',
      name: 'Charles Armstrong',
      googleId: 'name@gmail.com',
      secondaryEmail: 'charlesarmstrong@zidant.com',
      organizations: [{
        id: '3',
        name: 'The Lego Company',
        categories: ['Toy Company']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1bf671b4b31c3fa0f',
      name: 'Carole Griffith',
      googleId: 'name@gmail.com',
      secondaryEmail: 'carolegriffith@zidant.com',
      organizations: [{
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d14a21db956e91cc77',
      name: 'Helena Mcclain',
      googleId: 'name@gmail.com',
      secondaryEmail: 'helenamcclain@zidant.com',
      organizations: [ {
        id: '3',
        name: 'The Lego Company',
        categories: ['Toy Company']
      },
      {
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1e7d64e9469d41528',
      name: 'Mercedes Marshall',
      googleId: 'name@gmail.com',
      secondaryEmail: 'mercedesmarshall@zidant.com',
      organizations: [{
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d13a9de8ed21d35cf9',
      name: 'Villarreal Christian',
      googleId: 'name@gmail.com',
      secondaryEmail: 'villarrealchristian@zidant.com',
      organizations: [{
        id: '4',
        name: 'Something',
        categories: ['Toy Company', 'Electronics']
      }],
      role: 'VIEWACCESS'
    },
    {
      id: '5bb536d1c2769b07aa437df0',
      name: 'Graham Moran',
      googleId: 'name@gmail.com',
      secondaryEmail: 'grahammoran@zidant.com',
      organizations: [ {
      id: '2',
      name: 'Mattel Inc.',
      categories: ['Toy Company']
    },
    {
      id: '3',
      name: 'The Lego Company',
      categories: ['Toy Company']
    }],
      role: 'VIEWACCESS'
    }
  ];

  // Method for getting all users
  public getAllUsers():  UserViewModel.User[] {
    return this.mockUsers.slice();
  }

  // Getting user with Id
  public getUser(id): UserViewModel.User {
    return this.mockUsers.filter(x => x.id === id)[0];
  }

  // Filtering users by organization
  public getUsersByOrganization(orgId): UserViewModel.User[] {
    return this.mockUsers.filter( u => {
      return u.organizations.map(o => o.id).includes(orgId);
    });
  }


}
