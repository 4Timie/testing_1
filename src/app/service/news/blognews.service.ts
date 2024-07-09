import { Injectable } from '@angular/core';
import { News } from '../../shared/models/News';

@Injectable({
  providedIn: 'root',
})
export class BlognewsService {
  constructor() {}

  getAll(): News[] {
    // Using the Food model to structure the data
    return [
      {
        id: 1,
        image: '../../../assets/images/blog1.png',
        topic: 'How your team can use Design Sprint to solve Problems',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
      {
        id: 2,
        image: '../../../assets/images/blog2.png',
        topic: 'Is Agile methodology feasible in a product team?',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
      {
        id: 3,
        image: '../../../assets/images/blog1.png',
        topic: 'How your team can use Design Sprint to solve Problems',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
      {
        id: 4,
        image: '../../../assets/images/blog1.png',
        topic: 'How your team can use Design Sprint to solve Problems',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
      {
        id: 5,
        image: '../../../assets/images/blog1.png',
        topic: 'How your team can use Design Sprint to solve Problems',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
      {
        id: 6,
        image: '../../../assets/images/blog1.png',
        topic: 'How your team can use Design Sprint to solve Problems',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
      {
        id: 7,
        image: '../../../assets/images/blog1.png',
        topic: 'How your team can use Design Sprint to solve Problems',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
      {
        id: 8,
        image: '../../../assets/images/blog1.png',
        topic: 'How your team can use Design Sprint to solve Problems',
        description:
          'Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        body: 'lorem Design Sprint is a 1-week framework that is used to provide immediate solutions to product issues.',
        writer: 'Isaac Akinyemi',
        date: '24th Jun. 2023',
      },
    ];
  }

  // New method to get a news item by ID
  getNewsById(id: number): News | undefined {
    const allNews = this.getAll();
    return allNews.find((news) => news.id === id);
  }

}
