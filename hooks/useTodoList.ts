import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo } from "../interfaces";

export function useTodoList() {
  const queryClient = useQueryClient();
  const toast = useToast();
  const key = "todo-list";

  const todoListQuery = useQuery(key, () => {
    return axios.get("/api/todo");
  });

  const createMutation = useMutation(
    (name: string) =>
      axios.post("/api/todo", {
        fields: {
          Name: name,
          Done: false,
        },
      }),
    {
      onSuccess: () => {
        refresh();
        toast({
          title: "Added",
          status: "info",
          position: "bottom",
          duration: 1500,
        });
      },
    }
  );

  const deleteMutation = useMutation(
    (id: string) => axios.delete(`/api/todo?id=${id}`),
    {
      onSuccess: () => {
        refresh();
        toast({
          title: "Deleted",
          status: "error",
          position: "bottom",
          duration: 1500,
        });
      },
    }
  );

  const updateMutation = useMutation(
    (todo: Todo) => axios.patch(`/api/todo?id=${todo.id}`, todo),
    {
      onSuccess: () => {
        refresh();
      },
    }
  );

  const refresh = () => {
    queryClient.invalidateQueries(key);
  };

  useEffect(() => {
    if (!todoListQuery.isSuccess) {
      toast({
        title: "Data fetch success!",
        status: "info",
        position: "bottom",
        duration: 1500,
        isClosable: true,
      });
    }
  }, [todoListQuery.isSuccess]);

  return {
    todoList: todoListQuery.isSuccess
      ? (todoListQuery.data.data.records as Todo[])
      : [],
    isLoading: todoListQuery.isLoading,
    isProcessing:
      createMutation.isLoading ||
      deleteMutation.isLoading ||
      updateMutation.isLoading,
    refresh: refresh,
    addNewTodo: createMutation.mutate,
    deleteTodo: deleteMutation.mutate,
    updateTodo: updateMutation.mutate,
  };
}
