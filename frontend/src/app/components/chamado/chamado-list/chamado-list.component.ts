import { ChamadoService } from './../../../services/chamado.service';
import { MatPaginator } from '@angular/material/paginator';
import { Chamado } from './../../../models/chamado';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css'],
})
export class ChamadoListComponent implements OnInit {
  ELEMENT_DATA: Chamado[] = [];
  FILTERED_DATA: Chamado[] = [];

  displayedColumns: string[] = [
    'id',
    'titulo',
    'nomeCliente',
    'nomeTecnico',
    'dataAbertura',
    'prioridade',
    'status',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ChamadoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaStatus(status: any): string {
    if (status == '0') {
      return 'ABERTO';
    } else if (status == '1') {
      return 'EM ANDAMENTO';
    } else {
      return 'ENCERRADO';
    }
  }

  retornaPrioridade(prioridade: any): string {
    if (prioridade == '0') {
      return 'BAIXA';
    } else if (prioridade == '1') {
      return 'MÉDIA';
    } else {
      return 'ALTA';
    }
  }

  orderByStatus(status: any): void {
    if (status == '3') {
      this.dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    } else {
      let list: Chamado[] = [];
      this.ELEMENT_DATA.forEach((element) => {
        if (element.status == status) list.push(element);
      });
      this.FILTERED_DATA = list;
      this.dataSource = new MatTableDataSource<Chamado>(this.FILTERED_DATA);
      this.dataSource.paginator = this.paginator;
    }
  }
}
