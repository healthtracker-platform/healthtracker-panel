import {Observable, of} from 'rxjs';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProfessionalService} from "@shared/services/professional.service";


@Component({
  selector: 'app-search-professional-health-tab-by-name',
  templateUrl: './search-professional-by-name.component.html',
  styleUrls: ['search-professional-by-name.component.css']
})
export class SearchProfessionalByNameComponent {
  professionals: Observable<string[]> = of([]);

  @Input() professional: string;
  @Output() professionalChange = new EventEmitter<string>();

  constructor(private professionalService: ProfessionalService) {
  }

  public onSelect(): void {
    this.professionalChange.emit(this.professional);
  }

  searchProfessionalNamesByName(): void {
    this.professionals = this.professionalService.searchProfessionalNamesByName(this.professional);
  }
}
