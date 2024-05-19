import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

interface Book {
    title: string;
    author: string;
    summary: string;
    link: string;
    category: string;
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
            title: 'Deep Learning',
            author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
            summary: 'An introduction to a broad range of topics in deep learning, covering mathematical and conceptual background.',
            link: 'https://www.deeplearningbook.org',
            category: 'Technical',
            readStatus: 'Read'
        },
        {
            title: 'The 7 Habits of Highly Effective People',
            author: 'Stephen R. Covey',
            summary: 'A holistic approach towards personal and professional effectiveness, which is a framework for personal development.',
            link: 'https://www.example.com/7habits',
            category: 'Self-Help',
            readStatus: 'Read'
        },
        {
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            summary: 'This book series dives deep into the core mechanisms of JavaScript, helping you to truly understand the language.',
            link: 'https://www.example.com/ydkjs',
            category: 'Technical',
            readStatus: 'To Read'
        },
        {
            title: '1984',
            author: 'George Orwell',
            summary: 'A dystopian novel by English novelist George Orwell, presenting a society under omnipresent government surveillance and public manipulation.',
            link: 'https://www.example.com/1984',
            category: 'Fiction',
            readStatus: 'To Read'
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
