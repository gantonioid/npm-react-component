import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Grid, IconButton, ListItem, ListItemIcon, ListItemText, Paper, Tooltip } from '@material-ui/core';
import { Container, Draggable } from "react-smooth-dnd";
import { arrayMoveImmutable } from "array-move";
import { DragHandle, Edit } from '@material-ui/icons';

interface Props {
  /**
   * Nombre de la lista, se requiere que cada lista tenga ids únicos para poder hacer la interacción de "arrastrar"
   */
  listName: string;
  /**
   * Elementos de la lista, para mostrar
   */
  items: any[];
  /**
   * Nombre del campo que contiene el texto que se mostraría en cada ListItem
   */
  nameField: string;
  /**
   * Función que se ejecutaría cada que se cambia el orden de los elementos de la lista
   * @param items Nueva lista de elementos
   */
  setItemsList: (items: any[]) => void;
  /**
   * Función que se ejecutaría cuando se le da click al botón del lápiz (edit) de algún elemento
   * @param index Índice del elemento que se quiere editar
   */
  handleEdit: (index: number) => void;
  /**
   * Función que se ejecutaría cuando se da click en el botón de "Agregar"
   * @param items La lista de elementos actual, sobre esa agregaremos un elemento
   */
  addItem?: (items: any[]) => void;
}

const SortableList: React.FC<Props> = ({
  listName, items, nameField, setItemsList, handleEdit, addItem
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items])


  /**
   * Evento que se ejecuta al mover visualmente algún item de la lista
   */
  const onDrop = ({ removedIndex, addedIndex }: { removedIndex: any, addedIndex: any }) => {
    const newList = arrayMoveImmutable(items, removedIndex, addedIndex);
    setItemsList(newList)
  };

  return <Grid container>
    {addItem &&
      <Button
        variant='text'
        color='secondary'
        onClick={() => addItem(items)}
      >
        Agregar
      </Button>
    }
    {
      loading ? (
        <Grid container justifyContent='center' >
          <CircularProgress color='primary' variant='indeterminate' />
        </Grid >
      )
        : (
          <Grid item xs={12}>
            <Paper>
              <Container
                lockAxis='y'
                onDrop={onDrop}
                render={() => (
                  <>
                    {
                      items.map((item, index) => (
                        <Draggable
                          key={`${listName}-${index}`}
                          render={() => (
                            <>
                              <ListItem>
                                <ListItemIcon>
                                  <DragHandle />
                                </ListItemIcon>
                                <ListItemText
                                  primary={item[nameField]}
                                />
                                <IconButton size="small" onClick={() => {
                                  handleEdit(index)
                                }}>
                                  <Tooltip title="Editar" placement="top">
                                    <Edit color="primary" fontSize="medium" />
                                  </Tooltip>
                                </IconButton>
                              </ListItem>
                            </>
                          )}
                        />)
                      )
                    }
                  </>
                )}
              />
            </Paper>
          </Grid>
        )
    }
  </Grid>
}

export default SortableList;