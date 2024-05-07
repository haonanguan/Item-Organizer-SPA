package com.example.itemOrganizer.service;

// import com.example.itemOrganizer.ItemWebSocketHandler;
import com.example.itemOrganizer.model.Item;
// import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.stereotype.Service;

// import java.io.IOException;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ItemService {
    private final Map<Long, Item> itemMap = new HashMap<>();
    private final AtomicLong nextId = new AtomicLong(1);
    // private ItemWebSocketHandler webSocketHandler;

    public List<Item> findAllItems() {
        return new ArrayList<>(itemMap.values());
    }

    public Item findItemById(Long id) {
        if (itemMap.containsKey(id))
            return itemMap.get(id);

        return null;
    }

    public Item addItem(Item item) {
        Long id = nextId.getAndIncrement();
        item.setId(id);
        item.setItemCode(UUID.randomUUID().toString());
        itemMap.put(id, item);
        return item;
    }

    // public Item addItem(Item item) {
    // Long id = nextId.getAndIncrement();
    // item.setId(id);
    // item.setItemCode(UUID.randomUUID().toString());
    // itemMap.put(id, item);

    // broadcastItemChange(item, "add");
    // return item;
    // }

    // private void broadcastItemChange(Item item, String action) {
    // try {
    // String message = new ObjectMapper().writeValueAsString(Map.of(
    // "action", action,
    // "item", item));
    // webSocketHandler.broadcastMessage(message);
    // } catch (IOException e) {
    // e.printStackTrace();
    // }
    // }

    public Item updateItem(Item item) {
        if (itemMap.containsKey(item.getId())) {
            itemMap.put(item.getId(), item);
            return item;
        }
        return null;
    }

    public void deleteItem(Long id) {
        itemMap.remove(id);
    }
}
