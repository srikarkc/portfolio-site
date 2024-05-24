import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

interface Book {
    title: string;
    author: string;
    summary: string;
    link: string;
    category: string; // Technical, Self-Help, or Fiction
    readStatus: string; // 'Read' or 'To Read'
}

@Component({
    selector: 'app-reading',
    templateUrl: './reading.component.html',
    styleUrls: ['./reading.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class ReadingComponent {
    books: Book[] = [
        {
            title: 'Python Crash Course',
            author: 'Eric Matthes',
            summary: 'My favorite Python book since it got me to where I am today.',
            link: 'https://ehmatthes.github.io/pcc/',
            category: 'Technical',
            readStatus: 'Read'
        },
        {
            title: 'Automate the Boring Stuff with Python',
            author: 'Al Sweigart',
            summary: 'Another great Python book that has a lot of practical automation examples.',
            link: 'https://automatetheboringstuff.com',
            category: 'Technical',
            readStatus: 'Read'
        },
        {
            title: 'Extreme Ownership',
            author: 'Jocko Willink & Leif Babin',
            summary: 'This book defines how one should take ownership of their book and is of great inspiration to me.',
            link: 'https://www.example.com/ydkjs',
            category: 'Self-Help',
            readStatus: 'Read'
        },
        {
            title: 'Anxious People',
            author: 'Fredrik Backman',
            summary: 'I don\'t generally read fiction but this was recommended by a close friend and it was a brilliant read about judging people & their choices.',
            link: 'https://www.amazon.ca/Anxious-People-Fredrik-Backman/dp/1501160834',
            category: 'Fiction',
            readStatus: 'Read'
        }
    ];

    filteredBooks: Book[] = [];
    selectedGenre: string = 'All';
    selectedReadStatus: string = 'All';

    constructor() {
        this.filteredBooks = this.books;  // Initially display all books
    }

    filterBooks() {
      this.filteredBooks = this.books.filter(book =>
          (this.selectedGenre === 'All' || book.category === this.selectedGenre) &&
          (this.selectedReadStatus === 'All' || book.readStatus === this.selectedReadStatus)
      );
  }

}
