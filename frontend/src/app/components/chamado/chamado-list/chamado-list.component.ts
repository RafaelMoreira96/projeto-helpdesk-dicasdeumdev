import { MatPaginator } from '@angular/material/paginator';
import { Chamado } from './../../../models/chamado';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css'],
})
export class ChamadoListComponent implements OnInit {
  ELEMENT_DATA: Chamado[] = [
    {
      id: 1,
      dataAbertura: '21/06/2022',
      dataFechamento: '21/06/2022',
      prioridade: 'ALTA',
      status: 'ANDAMENTO',
      titulo: 'Chamado 1',
      descricao: 'Teste chamado 1',
      tecnico: 1,
      cliente: 6,
      nomeCliente: 'Rafale Moreira',
      nomeTecnico: 'Ximbinha',
    },
    {
      id: 2,
      dataAbertura: '21/06/2022',
      dataFechamento: '21/06/2022',
      prioridade: 'ALTA',
      status: 'ANDAMENTO',
      titulo: 'Chamado 2',
      descricao: 'Teste chamado 2',
      tecnico: 1,
      cliente: 6,
      nomeCliente: 'Rafale Moreira',
      nomeTecnico: 'Ximbinha',
    },
    {
      id: 3,
      dataAbertura: '21/06/2022',
      dataFechamento: '21/06/2022',
      prioridade: 'BAIXA',
      status: 'CONCLUIDA',
      titulo: 'Chamado 3',
      descricao: 'Teste chamado 3',
      tecnico: 1,
      cliente: 6,
      nomeCliente: 'Rafale Moreira',
      nomeTecnico: 'Ximbinha',
    },
    {
      id: 4,
      dataAbertura: '21/06/2022',
      dataFechamento: '21/06/2022',
      prioridade: 'MEDIA',
      status: 'ANDAMENTO',
      titulo: 'Chamado 4',
      descricao: 'Teste chamado 4',
      tecnico: 1,
      cliente: 6,
      nomeCliente: 'Rafale Moreira',
      nomeTecnico: 'Ximbinha',
    },
  ];

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

  constructor() {}

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
